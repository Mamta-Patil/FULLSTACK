const handleAddSubmit = async (e) => 
  {
    e.preventDefault();

    if (!addNames.en.trim() || !addPrice.trim() || addImages.en.length === 0) 
    {
      alert('Please enter English name, price, and at least one image for English.');
      return;
    }

    try 
    {
      const token = localStorage.getItem('jwt');
      if (!token) 
      {
        alert('User is not authenticated. Please log in again.');
        return;
      }

      const uploadedImageIds = {};
      for (const locale of locales) 
      {
        const localeCode = locale.code;

        if (addImages[localeCode].length > 0) 
        {
          const formData = new FormData();
          addImages[localeCode].forEach((image) => formData.append('files', image));
          const uploadResponse = await axios.post('http://localhost:1337/api/upload', formData, 
          {
            headers: 
            {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          });
          uploadedImageIds[localeCode] = uploadResponse.data.map((file) => file.id);
        } 
        else 
        {
          uploadedImageIds[localeCode] = [];
        }
      }

      const createdProductIds = {};
      for (const locale of locales) 
      {
        const localeCode = locale.code;

        if (addNames[localeCode].trim()) 
        {
          const productResponse = await axios.post(`http://localhost:1337/api/products?populate=*&locale=${localeCode}`,
          {
              data: 
              {
                name: addNames[localeCode],
                price: addPrice || 0,
                images: uploadedImageIds[localeCode].length > 0 ? uploadedImageIds[localeCode] : uploadedImageIds.en,
                locale: localeCode,
              },
          },
          {
              headers: 
              {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
          }
          );
          createdProductIds[localeCode] = productResponse.data.data.documentId;
        }
      }

      console.log('Products created successfully for each locale:', createdProductIds);
      setAddNames({ en: '', 'gu-IN': '', pa: '', ko: '' });
      setAddPrice('');
      setAddImages({ en: [], 'gu-IN': [], pa: [], ko: [] });
      setAddImagePreviews({ en: [], 'gu-IN': [], pa: [], ko: [] });
      setShowAddForm(false);
      fetchProducts();
      alert('Products created successfully for the specified locales!');
    } 
    catch (error) 
    {
      console.error('Error:', error.response?.data || error.message);
      alert('An error occurred while creating the products. Please try again.');
    }
  };


  return(
    <form onSubmit={handleAddSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6 text-black border border-gray-200" encType="multipart/form-data" >

    {/* English Form */}
    <div>{selectedLocale === 'en' &&
    <div>
      <h3 className="text-lg font-semibold text-gray-700">English</h3>
      <label htmlFor="addNameEn" className="block text-gray-700 font-medium">Name:</label>
      <input type="text" id="addNameEn" value={addNames.en} onChange={(e) => setAddNames({ ...addNames, en: e.target.value })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800" placeholder="Enter product name in English" required/>
      <label htmlFor="addImageEn" className="block text-gray-700 font-medium mt-2">Image:</label>
      <input type="file" id="addImageEn" accept="image/*" multiple onChange={(e) => {const files = Array.from(e.target.files);setAddImages({ ...addImages, en: files });setAddImagePreviews({ ...addImagePreviews, en: files.map((file) => URL.createObjectURL(file)) }); }}className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800"required/>
      <div className="flex flex-wrap gap-4 mt-4">
        {addImagePreviews.en.map((preview, index) => (
          <div key={index} className="relative group w-1/2 p-2">
            <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded-md border border-gray-200 shadow-sm mx-auto flex justify-evenly items-center"/>
            <button type="button" onClick={() => { const newFiles = addImages.en.filter((_, i) => i !== index); const newPreviews = addImagePreviews.en.filter((_, i) => i !== index); setAddImagePreviews({ ...addImagePreviews, en: newPreviews }); setAddImages({ ...addImages, en: newFiles }); }} className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600" >×</button>
          </div>
        ))}
      </div>
    </div>
    }</div>

    {/* Gujarati Form */}
    <div>{selectedLocale === 'gu-IN' &&
    <div>
      <h3 className="text-lg font-semibold text-gray-700">Gujarati</h3>
      <label htmlFor="addNameGu" className="block text-gray-700 font-medium">Name:</label>
      <input type="text" id="addNameGu" value={addNames['gu-IN']} onChange={(e) => setAddNames({ ...addNames, 'gu-IN': e.target.value })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800" placeholder="Enter product name in Gujarati" />
      <label htmlFor="addImageGu" className="block text-gray-700 font-medium mt-2">Image:</label>
      <input type="file" id="addImageGu" accept="image/*" multiple onChange={(e) => {const files = Array.from(e.target.files); setAddImages({ ...addImages, 'gu-IN': files }); setAddImagePreviews({ ...addImagePreviews, 'gu-IN': files.map((file) => URL.createObjectURL(file)) });}} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800" />
      <div className="flex flex-wrap gap-4 mt-4">
        {addImagePreviews['gu-IN'].map((preview, index) => (
          <div key={index} className="relative group w-1/2 p-2">
            <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded-md border border-gray-200 shadow-sm mx-auto flex justify-evenly items-center" />
            <button type="button" onClick={() => { const newPreviews = addImagePreviews['gu-IN'].filter((_, i) => i !== index); const newFiles = addImages['gu-IN'].filter((_, i) => i !== index); setAddImagePreviews({ ...addImagePreviews, 'gu-IN': newPreviews }); setAddImages({ ...addImages, 'gu-IN': newFiles }); }} className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600" >×</button>
          </div>
        ))}
      </div>
    </div>
    }</div>

    {/* Punjabi Form */}
    <div>{selectedLocale === 'pa' &&
    <div>
      <h3 className="text-lg font-semibold text-gray-700">Punjabi</h3>
      <label htmlFor="addNamePa" className="block text-gray-700 font-medium">Name:</label>
      <input type="text" id="addNamePa" value={addNames.pa} onChange={(e) => setAddNames({ ...addNames, pa: e.target.value })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800" placeholder="Enter product name in Punjabi"/>
      <label htmlFor="addImagePa" className="block text-gray-700 font-medium mt-2">Image:</label>
      <input type="file" id="addImagePa" accept="image/*" multiple onChange={(e) => { const files = Array.from(e.target.files); setAddImages({ ...addImages, pa: files });setAddImagePreviews({ ...addImagePreviews, pa: files.map((file) => URL.createObjectURL(file)) });}}className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800"/>
      <div className="flex flex-wrap gap-4 mt-4">
        {addImagePreviews.pa.map((preview, index) => (
          <div key={index} className="relative group w-1/2 p-2">
            <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded-md border border-gray-200 shadow-sm mx-auto flex justify-evenly items-center" />
            <button type="button" onClick={() => { const newPreviews = addImagePreviews.pa.filter((_, i) => i !== index); const newFiles = addImages.pa.filter((_, i) => i !== index); setAddImagePreviews({ ...addImagePreviews, pa: newPreviews }); setAddImages({ ...addImages, pa: newFiles }); }} className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600">×</button>
          </div>
        ))}
      </div>
    </div>
    }</div>

    {/* Korean Form */}
    <div>{selectedLocale === 'ko' &&
    <div>
      <h3 className="text-lg font-semibold text-gray-700">Korean</h3>
      <label htmlFor="addNameKo" className="block text-gray-700 font-medium">Name:</label>
      <input type="text" id="addNameKo" value={addNames.ko} onChange={(e) => setAddNames({ ...addNames, ko: e.target.value })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800" placeholder="Enter product name in Korean" />
      <label htmlFor="addImageKo" className="block text-gray-700 font-medium mt-2">Image:</label>
      <input type="file" id="addImageKo" accept="image/*" multiple onChange={(e) => { const files = Array.from(e.target.files); setAddImages({ ...addImages, ko: files }); setAddImagePreviews({ ...addImagePreviews, ko: files.map((file) => URL.createObjectURL(file)) }); }} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800" />
      <div className="flex flex-wrap gap-4 mt-4">
        {addImagePreviews.ko.map((preview, index) => (
          <div key={index} className="relative group w-1/2 p-2">
            <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded-md border border-gray-200 shadow-sm mx-auto flex justify-evenly items-center" />
            <button type="button" onClick={() => { const newPreviews = addImagePreviews.ko.filter((_, i) => i !== index); const newFiles = addImages.ko.filter((_, i) => i !== index); setAddImagePreviews({ ...addImagePreviews, ko: newPreviews }); setAddImages({ ...addImages, ko: newFiles }); }} className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600" >×</button>
          </div>
        ))}
      </div>
    </div>
    }</div>

    <label htmlFor="addPrice" className="block text-gray-700 font-medium">Price:</label>
    <input type="number" id="addPrice" value={addPrice} onChange={(e) => setAddPrice(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800" placeholder="Enter product price" required />

    <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow-md" >Submit</button>
  </form>
  )