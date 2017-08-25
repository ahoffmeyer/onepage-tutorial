lib.gridelements.defaultGridSetup {
    cObject =< lib.contentElement
}

plugin.tx_gridelements_pi1 >
tt_content.gridelements_pi1 >
tt_content.gridelements_pi1 =< lib.contentElement
tt_content.gridelements_pi1 {
    templateName = Generic
    variables {
        content = COA
        content {
            10 = USER
            10 {
                userFunc = GridElementsTeam\Gridelements\Plugin\Gridelements->main
                setup {
                    default < lib.gridelements.defaultGridSetup

                    // 2 Columns Grid
                    1 < lib.gridelements.defaultGridSetup
                    1 {
                        cObject {
                            templateName = 2ColsGrid
                            templateRootPaths {
                                20 = EXT:onepage_tutorial/Resources/Private/Templates/Extensions/GridElements/
                            }
                        }
                    }

                    // 3 Columns Grid
                    2 < lib.gridelements.defaultGridSetup
                    2 {
                        cObject {
                            templateName = 3ColsGrid
                            templateRootPaths {
                                20 = EXT:onepage_tutorial/Resources/Private/Templates/Extensions/GridElements/
                            }
                        }
                    }
                }
            }
        }
    }
}