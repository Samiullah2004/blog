const myPortableTextComponents = {

  
    
    block: {
        h1: ({children}) => <h1 className="text-2xl font-bold text-red-500">{children}</h1>,
        h2: ({children}) => <h2 className="text-2xl font-bold text-red-500">{children}</h2>,
        // p: ({children}) => <p className="text-2xl font-bold text-red-500">{children}</p>,
        normal: ({ children }) => <p className="text-blue-300">{children}</p>,
      },

      list: {
        // Custom serializer for unordered lists
        bullet: ({ children }) => <ul  className="list-disc space-y-2 mt-10">{children}</ul>,
        // Custom serializer for ordered lists
        number: ({ children }) => <ol  >{children}</ol>,
      },
  }

  export default myPortableTextComponents