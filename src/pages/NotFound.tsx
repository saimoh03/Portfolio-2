const NotFound = () => {

  return (
    <div className="text-center mt-50">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
      <a href="/" className="text-primary underline hover:text-primary/90">
        Return to Home
      </a>
    </div>
  );
};

export default NotFound;
