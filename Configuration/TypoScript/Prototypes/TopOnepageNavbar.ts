prototype.topOnePageNavi = HMENU
prototype.topOnePageNavi {
    wrap = <nav class="navbar navbar-inverse navbar-fixed-top"><div class="container">|</div></nav>

    special = directory
    special.value = {$plugin.tx_onepage_tutorial.settings.onepagePid}

    1 = TMENU
    1 {
        wrap = <ul class="nav navbar-nav">|</ul>

        stdWrap.prepend = TEXT
        stdWrap.prepend {
            typolink {
                parameter = {$plugin.tx_onepage_tutorial.settings.rootPid}
                section = onepage-top
            }
            wrap = <li>|</li>
        }

        NO = 1
        NO {
            doNotLinkIt = 1
            wrapItemAndSub = <li>|</li>

            stdWrap {
                typolink {
                    parameter = {$plugin.tx_onepage_tutorial.settings.rootPid}
                    section.data = field:uid
                    section.wrap = onepage-|
                }
            }
        }
    }
}