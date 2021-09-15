const router = require('express').Router();
const { default: ModelManager } = require('sequelize/types/lib/model-manager');
const { Comment } = require('../../models')

router.get('/', (req, res) => {})

router.post('/', (req, res) => {})

router.delete('/:id', (req, res) => {})

module.exports = router