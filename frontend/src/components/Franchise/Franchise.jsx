import React from 'react';
function Franchise() {
//   const { submit, loading } = useWeb3Forms({
//     access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
//   });

//   const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const response = await submit(data);
    if (response.success) {
      alert('Form submitted successfully!');
    } else {
      alert('Submission failed.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-45 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Start Your Own Wisdom World Academy Franchise
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our growing network of educational excellence and make a difference in children's lives.
            Start your journey to becoming a Wisdom World Academy franchise owner today.
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default Franchise;
