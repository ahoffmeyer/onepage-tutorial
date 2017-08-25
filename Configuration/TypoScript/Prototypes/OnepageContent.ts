<INCLUDE_TYPOSCRIPT: source="DIR: EXT:onepage_tutorial/Configuration/TypoScript/Extensions/GridElements/" extensions="ts">

/**
* We're using a separate variable to render our onepage content into.
* So you have the upper port with homeContent to render the rootpage content and then you have all the subpage contents.
*/
prototype.onepageContent = HMENU
prototype.onepageContent {
    special = directory
    special.value = {$plugin.tx_onepage_tutorial.settings.onepagePid}

    1 = TMENU
    1 {

        NO = 1
        NO {
            // We wrap all parts into a section tag with an ID to enable scrolling/jumping to this section.
            allStdWrap.dataWrap = <section id="onepage-{field:uid}">|</section>
            doNotLinkIt = 1

            // Get a nice header image for a section if there is one in field MEDIA
            // To set this before makes it easier to create a full width image just with some CSS
            // ***
            // @NOTE: You can put this code into the content rendering section instead.
            before.cObject = FILES
            before.cObject {
                references {
                    table = pages
                    uid.data = field:uid
                    fieldName = media
                }
                renderObj = IMG_RESOURCE
                renderObj {
                    file {
                        import.data = file:current:publicUrl
                    }
                    stdWrap.wrap = <div class="header-img" style="background-image: url('|'); background-size: cover; width: 100%; height: 200px;"></div>
                }
            }

            stdWrap.cObject = CONTENT
            stdWrap.cObject {
                table = tt_content
                select {
                    pidInList.data = field:uid

                    // Exclude Gridelements containers. Why? Simply if not, we would have the content rendered twice:
                    // Once just the elements stored in the DB and then the Gridelement children.
                    // This prevents rendering the elements as single element.
                    where = tx_gridelements_container = 0
                }
                renderObj < tt_content
            }
        }
    }
}