<INCLUDE_TYPOSCRIPT: source="DIR: EXT:onepage_tutorial/Configuration/TypoScript/Plugin/" extensions="ts">
<INCLUDE_TYPOSCRIPT: source="DIR: EXT:onepage_tutorial/Configuration/TypoScript/Prototypes/" extensions="ts">
<INCLUDE_TYPOSCRIPT: source="DIR: EXT:onepage_tutorial/Configuration/TypoScript/Extensions/GridElements/" extensions="ts">

page = PAGE
page {
    config {
        absRefPrefix = /
    }

    bodyTagAdd = id="onepage-top"

    includeCSS {
        bootstrap = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
        bootstrap.external = 1
    }

    cssInline {
        10 = TEXT
        10.value = body { padding-top: 70px; }
    }

    10 = FLUIDTEMPLATE
    10 {
        file = {$plugin.tx_onepage_tutorial.settings.templateRootPath}
        partialRootPath = {$plugin.tx_onepage_tutorial.settings.partialRootPath}
        layoutRootPath = {$plugin.tx_onepage_tutorial.settings.layoutRootPath}

        variables {

            topOnePageNavi < prototype.topOnePageNavi

            homeContent < styles.content.get

            onepageContent < prototype.onepageContent
        }
    }
}