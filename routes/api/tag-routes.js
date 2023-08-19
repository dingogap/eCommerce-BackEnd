const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
      },
    ],
  }).then((tagData) => {
    if (!tagData) {
      res.status(404).send();
      return;
    }
    res.status(200).json(tagData);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: [
      {
        model: Product,
      },
    ],
  }).then((tagData) => {
    if (!tagData) {
      res.status(404).send();
      return;
    }
    res.status(200).json(tagData);
  });  
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    name: req.body.categoryName,
  })
    .then((newTag) => {
      res.status(200).json(newTag);
    })
    .catch((err) => {
      res.status(500).json(err);
    });  
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      name: req.body.name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      // Sends the updated book as a json response
      res.status(200).json(updatedTag);
    })
    .catch((err) => res.status(404).json(err));  
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((deletedTag) => {
      res.status(200).json(deletedTag);
    })
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
