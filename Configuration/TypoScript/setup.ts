<INCLUDE_TYPOSCRIPT: source="DIR: EXT:onepage_tutorial/Configuration/TypoScript/Plugin/" extensions="ts">
<INCLUDE_TYPOSCRIPT: source="DIR: EXT:onepage_tutorial/Configuration/TypoScript/Extensions/GridElements/" extensions="ts">

page = PAGE
page {
    includeCSS {
        bootstrap = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
        bootstrap.external = 1
    }

    10 = FLUIDTEMPLATE
    10 {
        file = {$plugin.tx_onepage_tutorial.settings.templateRootPath}
        partialRootPath = {$plugin.tx_onepage_tutorial.settings.partialRootPath}
        layoutRootPath = {$plugin.tx_onepage_tutorial.settings.layoutRootPath}

        variables {
            homeContent < styles.content.get

            onepageContent = HMENU
            onepageContent {
                special = directory
                special.value = {$plugin.tx_onepage_tutorial.settings.onepagePid}

                1 = TMENU
                1 {
                    NO = 1
                    NO {
                        doNotLinkIt = 1

                        stdWrap.cObject = CONTENT
                        stdWrap.cObject {
                            table = tt_content
                            select {
                                pidInList.data = field:uid
                                where = tx_gridelements_container = 0
                            }
                            renderObj < tt_content
                        }
                    }
                }
            }
        }
    }
}