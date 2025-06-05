export const LoginPage = ({ title, description }: { title: string; description: string }) => {
  return (
    <main className='main'>
      <section className='section'>
        <h1>
            {title}
        </h1>
        <p>
            {description}
        </p>
      </section>
    </main>
  );
};
