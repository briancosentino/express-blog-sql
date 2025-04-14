/* const express = require(express) */
const connection = require('../data/db')
const posts = require('../data/posts')
function index(req, res) {
    const sql = 'SELECT * FROM posts'
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'db query failed' })
        res.json(results)
    })
}
function show(req, res) {
    res.json(posts.find(post => post.slug === req.params.id))
}
function store(req, res) {
    const newId = 23876328
    const newPost = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags

    }

    posts.push(newPost)
    console.log(posts);
    console.log(req.body);

    res.status(201)
    res.json(newPost)

}
function update(req, res) {
    const slug = req.params.slug
    const post = posts.find(post => post.slug === slug)


    if (!post) {
        res.status(404)
        console.log(posts);

        return res.json({
            error: 'error',
            message: 'post not found'
        })
    }

    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags

    console.log(posts);
    res.json(post)

}
function modify(req, res) {
    res.send('modify whole post' + req.params.id)
}
function destroy(req, res) {
    const postIndex = posts.indexOf(posts.find(post => post.slug === req.params.id))
    posts.splice(postIndex, 1)

    console.log(posts);

    res.sendStatus(204)


}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}