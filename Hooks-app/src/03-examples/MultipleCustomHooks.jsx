import { useFetch, useCounter } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter();
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking bag</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote
          author={author}
          quote={quote}
        />
      )}

      <button
        disabled={isLoading}
        className="btn btn-primary m-2 "
        onClick={() => decrement()}
      >
        Prev
      </button>
      <button
        disabled={isLoading}
        className="btn btn-primary m-2"
        onClick={() => increment()}
      >
        Next
      </button>
    </>
  );
};
