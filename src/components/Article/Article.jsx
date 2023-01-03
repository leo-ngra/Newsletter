const Article = ({ title, text, tags, image }) => {

    return <div className="alura-card">

        <h1 className="mb-2 text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h1>
        <div className="w-full pr-5 flex gap-2 justify-end">
            {
                tags.map(tag => <span key={tag} className="px-4 py-1 bg-alura-100 dark:bg-dark-100 rounded-full text-gray-200 text-xs font-bold uppercase hover:bg-alura-200 hover:scale-110">{tag}</span>)
            }
        </div>
        <div className="flex flex-col gap-1">
            {
                text.map((content, index) => <span key={index} className="text-alura-200 dark:text-gray-400">{content}</span>)
            }
        </div>
        {image && <img className="sm:p-4" src={image} />}   
    </div>
}

export default Article