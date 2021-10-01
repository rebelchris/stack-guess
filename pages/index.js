import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  const findDevStack = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    router.push(name);
  };

  return (
    <div className='p-8 min-h-screen bg-gray-100 flex'>
      <Head>
        <title>Find your guilty pleasure dev stack</title>
        <meta
          name='description'
          content='Find your guilty pleasure dev stack based on your name'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col justify-center h-auto w-full items-center	rounded-xl border-4 border-white p-8'>
        <h1 className='text-4xl mb-4 font-black'>
          Find your{' '}
          <span className='italic text-purple-300'>guilty pleasure</span> dev
          stack
        </h1>
        <p className='mb-4 font-semibold'>We all know you got one 😏</p>
        <form className='shadow-lg rounded-2xl p-6' onSubmit={findDevStack}>
          <input
            name='name'
            placeholder='Enter your firstname'
            className='p-4 mr-2 rounded-xl'
            required
            autoComplete='name'
          />
          <button
            type='submit'
            className='bg-purple-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2 uppercase'
          >
            Find it
          </button>
        </form>
      </main>
    </div>
  );
}
