import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherChromeElement } from '@aracna/icons-feather-web/elements/chrome-element'

export const IconFeatherChrome: ElementComponent<IconFeatherChromeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherChromeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-chrome', IconFeatherChromeElement)
