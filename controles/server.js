let users = []

export const getAll = (req, res) => {
  res.status(200).json(users)
}

export const create = (req, res) => {
  const newPerson = {
    id: Date.now().toString(),
    ...req.body
  }
  users.push(newPerson)
  res.status(201).json(users)
}