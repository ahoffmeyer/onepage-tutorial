<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'OnePage Tutorial',
    'description' => 'OnePager tutorial setup with TYPO3 8.7 and Gridelements',
    'category' => 'distribution',
    'version' => '0.1.0',
    'priority' => 'bottom',
    'state' => 'beta',
    'clearcacheonload' => true,
    'author' => 'Andreas Hoffmeyer',
    'author_email' => 'hallo@andreas-hoffmeyer.me',
    'author_company' => '',
    'constraints' => [
        'depends' => [
            'typo3' => '8.6.0-8.99.99',
            'gridelements' => 'dev-master',
        ],
        'suggests' => [],
    ],
];