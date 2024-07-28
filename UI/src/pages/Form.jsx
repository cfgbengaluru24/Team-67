const Form = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Tutor Application</h2>

      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 font-bold">
            Preferred Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Select a subject</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="literature">Literature</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="experience" className="block mb-2 font-bold">
            Years of Experience
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Form;
