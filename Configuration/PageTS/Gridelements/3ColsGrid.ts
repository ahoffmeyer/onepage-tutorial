tx_gridelements {
    overruleRecords = 1

    setup {
        2 {
            title = 3 Columns Grid
            description = 3 Colums Grid
            frame = 1
            # icon = EXT:onepage_tutorial/Resources/Public/Icons/Backend/Grids/2ColsGrid.png
            # flexformDS = FILE:EXT:tutorial/Configuration/FlexForms/Extensions/GridElements/2ColsGrid.xml
            topLevelLayout = 0
            config {
                colCount = 3
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = left
                                colPos = 10
                            }
                            2 {
                                name = middle
                                colPos = 20
                            }
                            3 {
                                name = right
                                colPos = 30
                            }
                        }
                    }
                }
            }
        }
    }
}
