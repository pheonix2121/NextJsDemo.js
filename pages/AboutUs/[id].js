const Developer = () => {
    const [developer, setDeveloper] = useState({});
    const { id } = useRouter().query;
  
    useEffect(() => {
      setDeveloper(details.find((detail) => detail.id === +id));
    }, [id]);
  
  
    return (
      <>
        {developer ? (
          <div>
            <h1>
            {developer.name} {developer.role}
            </h1>
          </div>
        ) : (
          <h1>Developer doesn't exist.</h1>
        )}
    </>
  );
};

export default Developer;