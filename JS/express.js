const app =  express()

const port = 4000

app.get( './',(req, res) => {
    res.send('hello sumit')
}
)

app.get('./dashboard', (req, res) => {
    res.send('welcome to the dashboard')
})

app.post('./project', (req, res) => {
    res.send(<h1>withdraw money </h1>)
})

app.get('./login', (req , res) => {
    req.send('enter your credentials')
})

app.listen(port, () => {
    console.log('hi iam server listen your request ${port}')
})