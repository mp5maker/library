require('dotenv').config()
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const { Sequelize, DataTypes } = require('sequelize')
const { response } = require('express')

const main = async() => {
    const app = express()
    const sequelize = new Sequelize(
        process.env.DB,
        process.env.DB_USER,
        process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    });

    /* DATABASE */
    const Project = sequelize.define('Project', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
    })

    const Task = sequelize.define('Task', {
        title: DataTypes.STRING,
    })

    Task.belongsTo(Project) // Many to One
    Project.hasMany(Task) // One to Many
    await sequelize.sync({ force: true });

    /* SETTINGS */
    app.set('view engine', 'jade')
    app.set('views', `${__dirname}/views`)
    app.set('view options', { layout: false })

    /* MIDDLEWARES */
    app.use(express.static(`${__dirname}/static`))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.get('/', async function (_request, response, next) {
        const projects = await Project.findAll({})
        response.render('index', { projects })
    })

    app.post('/projects', function(request, response, next) {
        const project = Project.create({
            ...request.body,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        response.send(project)
    })

    app.get('/project/:id', function (request, response, next) {
        response.render('index')
    })

    app.delete('/project/:id', async function(request, response, next) {
        const project = await Project.findByPk(Number(request.params.id))
        if (project) {
            Project.destroy({
                where: { id: Number(request.params.id ) }
            })
        }
    })

    app.get('/project/:id/tasks', async function (request, response, next) {
        const project = await Project.findByPk(Number(request.params.id))
        const tasks = await Task.findAll({ where: { id: Number(project.id) } })
        console.log('hi')
        response.render('tasks', { project, tasks })
    })

    app.post('/project/:id/tasks', async function (request, response, next) {
        request.body.ProjectId = request.params.id
        const task = await Task.create({
            ...request.body,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        response.send(task)
    })

    app.delete('/task/:id', async function(request, response, next) {
        const project = await Task.findByPk(Number(request.params.id))
        if (project) {
            Task.destroy({
                where: { id: Number(request.params.id) }
            })
            response.send(200)
        }
    })

    const server = http.createServer(app)
    server.listen(4000, () => console.log('Connected to 4000'))
}

main().catch((error) => {
    console.log(error)
})