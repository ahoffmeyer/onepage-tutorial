/**
* Most of the config is already done by Gridelements.
* What is needed here is the mapping of the cObject to fluid_styled_content defined in lib.contentElements.
*/
lib.gridelements.defaultGridSetup {
    cObject =< lib.contentElement
}

plugin.tx_gridelements_pi1 >
tt_content.gridelements_pi1 >
tt_content.gridelements_pi1 =< lib.contentElement
tt_content.gridelements_pi1 {

    // There is no default template so generec is needed here to avoid an exception output
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

                            // The templateName equals the the filename of your grid-template without .html
                            // So keep in mind, that this is just the filename without file-extension.
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