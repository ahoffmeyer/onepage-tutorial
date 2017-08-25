tx_gridelements {
    overruleRecords = 1

    setup {
        1 {
            title = 2 Columns Grid
            description = 2 Colums Grid
            frame = 1
            # icon = EXT:onepage_tutorial/Resources/Public/Icons/Backend/Grids/2ColsGrid.png
            # flexformDS = FILE:EXT:tutorial/Configuration/FlexForms/Extensions/GridElements/2ColsGrid.xml
            topLevelLayout = 0
            config {
                colCount = 2
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = left
                                colPos = 10
                            }
                            2 {
                                name = right
                                colPos = 20
                            }
                        }
                    }
                }
            }
        }
    }
}
