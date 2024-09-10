import PostSchema from '../models/post.js'

const posts = async(req, res) => {
    try {
        const posts = await PostSchema.find() // tüm postları getirir
        res.status(200).json(posts)

    }catch(err) {
        return res.status(500).json({ message: err.message })
    }
}

const create = async(req, res) => {
    try {
        const newPost = await PostSchema.create(req.body) 
        res.status(201).json(newPost)
    }catch(err) {
        return res.status(500).json({ message: err.message })
    }
}

const update = async(req, res) => {
    try {
        const { id } = req.params
        const updated_post = await PostSchema.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updated_post)
    }catch(err) {
        return res.status(500).json({ message: err.message })
    }
}

const remove = async(req, res) => {
    try {
        const { id } = req.params
        const delete_post = await PostSchema.findByIdAndDelete(id)
        res.status(200).json({ message: "Post silindi." })
    }catch(err) {
        return res.status(500).json({ message: err.message })
    }
}

export { posts, create, update, remove }