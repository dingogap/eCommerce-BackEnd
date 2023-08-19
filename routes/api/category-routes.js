const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
      },
    ],
  }).then((categoryData) => {
    if (!categoryData) {
      res.status(404).send();
      return;
    }
    res.status(200).json(categoryData);
  });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include: [
      {
        model: Product,
      },
    ],
  }).then((categoryData) => {
    if (!categoryData) {
      res.status(404).send();
      return;
    }
    res.status(200).json(categoryData);
  });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    categoryName: req.body.categoryName,
  })
    .then((newCategory) => {
      res.status(200).json(newCategory);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      name: req.body.name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      // Sends the updated book as a json response
      res.status(200).json(updatedCategory);
    })
    .catch((err) => res.status(404).json(err));
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((deletedCategory) => {
      res.status(200).json(deletedCategory);
    })
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
