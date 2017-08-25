<INCLUDE_TYPOSCRIPT: source="DIR: EXT:onepage_tutorial/Configuration/TypoScript/Plugin/" extensions="ts">
<INCLUDE_TYPOSCRIPT: source="DIR: EXT:onepage_tutorial/Configuration/TypoScript/Prototypes/" extensions="ts">

page = PAGE
page {
    config {
        absRefPrefix = /
    }

    // For the OnePager top link to scroll right up to the top
    bodyTagAdd = id="onepage-top"

    includeCSS {
        bootstrap = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
        bootstrap.external = 1
    }

    cssInline {
        // As the TopNav is fixed, this is recommended by bootstrap.
        // Put it in your own CSS file if you like to.
        10 = TEXT
        10.value = body { padding-top: 70px; }
    }

    10 = FLUIDTEMPLATE
    10 {
        file = {$plugin.tx_onepage_tutorial.settings.templateRootPath}
        partialRootPath = {$plugin.tx_onepage_tutorial.settings.partialRootPath}
        layoutRootPath = {$plugin.tx_onepage_tutorial.settings.layoutRootPath}

        variables {
            // Top navigation as variable in the template
            topOnePageNavi < prototype.topOnePageNavi

            // All content from the upper root aka homepage
            homeContent < styles.content.get

            // Fetch the content from defined pages as onepage content
            onepageContent < prototype.onepageContent
        }
    }
}