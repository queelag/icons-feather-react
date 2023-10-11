import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherWatchElement } from '@aracna/icons-feather-web/elements/watch-element'

export const IconFeatherWatch: ElementComponent<IconFeatherWatchElement, IconProps> = createBaseElementComponent<
  IconFeatherWatchElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-watch', IconFeatherWatchElement)
