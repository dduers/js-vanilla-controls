<?php
declare(strict_types = 1);
header('Content-Type: application/json');
echo json_encode([

    // control array
    'controls' => [

        // user defined key
        'someid1' => [

            // control type
            'type' => 'mInput',

            // control options
            'options' => [
                'elementId' => 'js-input1',
                'tooltip' => 'Enter your name!',
                'type' => 'number',
                'readonly' => true,
                'value' => 42,
            ]
        ],
        'someid2' => [

            // control type
            'type' => 'mInput',

            // control options
            'options' => [
                'elementId' => 'js-input2',
                'tooltip' => 'Enter your lastname!',
                'onChange' => 'this.query',
            ]
        ],
        'someid3' => [

            // control type
            'type' => 'mInput',

            // control options
            'options' => [
                'elementId' => 'js-input3',
                'type' => 'hidden',
                'value' => 'hidden_value',
            ]
        ],
    ],
]);
