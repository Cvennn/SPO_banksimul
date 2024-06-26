const express = require('express');
const router = express.Router();
const transaction = require('../models/transaction_model');

router.get('/', function(request, response) {
    transaction.getAllTransaction(function(err, result) {
        if (err) {
            response.send(err);
        } else {
            console.log(result);
            response.json(result);
        }
    });
});

router.get('/:idtransaction', function(request, response) {
    transaction.getOneTransaction(request.params.idtransaction, function(err, result) {
        if (err) {
            response.send(err);
        } else {
            console.log(result);
            response.json(result[0]);
        }
    });
});

router.post('/', function(request, response) {
    transaction.addTransaction(request.body, function(err, result) {
        if (err) {
            response.send(err);
        } else {
            response.json(result);
        }
    });
});

router.put('/:idtransaction', function(request, response) {
    transaction.updateTransaction(request.params.idtransaction, request.body, function(err, result) {
        if (err) {
            response.send(err);
        } else {
            console.log(result.affectedRows);
            response.json(result.affectedRows);
        }
    });
});

router.delete('/:idtransaction', function(request, response) {
    transaction.deleteTransaction(request.params.idtransaction, function(err, result) {
        if (err) {
            response.send(err);
        } else {
            console.log(result.affectedRows);
            response.json(result.affectedRows);
        }
    });
});

module.exports = router;