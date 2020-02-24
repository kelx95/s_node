var blogposts = require('../models/blog');
var jwt = require('jsonwebtoken');

const tokenKey = 'pwd123!';

const viewAllBlogposts = (req, res) => {
    blogposts.readAll()
        .then(data => {
            res.render('blog', {
                blogposts: data
            });
        })
        .catch(err => {
            res.status(500).send('Cannot read');
        });
}

const viewNewBlogpost = (req, res) => {
    res.render('newblog')
}
const apiNewBlogpost = (req, res) => {
    let cookie = req.cookies.jwt;
    let decoded = jwt.verify(cookie, tokenKey);
    blogposts.createNew({
            email: decoded.email,
            post: req.body.content
        })
        .then(() => {
            res.redirect('/blogposts');
        })
        .catch(err => {
            res.redirect('/blogposts/new?err=1')
        });
}
const viewEditBlogpost = (req, res) => {
    blogposts.readById(req.params.id)
        .then(data => {
            res.render('editblog', {
                blog_id: req.params.id,
                blogs: data
            });
        })
        .catch(err => {
            res.status(500).send('Cannot edit');
        });
}

const apiEditBlogpost = (req, res) => {
    blogposts.update(req.body.id, {
            post: req.body.post
        })
        .then(() => {
            res.redirect('/blogposts')
        })
        .catch(err => {
            res.status(500).send('Could not update the post')
        })
}

const apiDeleteBlogpost = (req, res) => {
    blogposts.remove(req.params.id)
        .then(() =>
            res.redirect('/blogposts')
        )
        .catch(err => {
            res.status(500).send('Could not delete blogpost')
            return
        })
}
module.exports = {
    viewAllBlogposts,
    viewNewBlogpost,
    apiNewBlogpost,
    viewEditBlogpost,
    apiEditBlogpost,
    apiDeleteBlogpost
}