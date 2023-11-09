export default function CarForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    console.log("formData :>> ", formData);

    const res = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="make" type="text" />
      <input name="model" type="text" />
      <input name="image" type="text" />
      <textarea name="description" type="text" />
      <button type="submit">Create Car</button>
    </form>
  );
}
