import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherWatchElement } from '@aracna/icons-feather-web/elements/watch-element'

export const IconFeatherWatch: ElementComponent<IconFeatherWatchElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherWatchElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-watch', IconFeatherWatchElement)
