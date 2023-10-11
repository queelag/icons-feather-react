import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPauseElement } from '@aracna/icons-feather-web/elements/pause-element'

export const IconFeatherPause: ElementComponent<IconFeatherPauseElement, IconProps> = createBaseElementComponent<
  IconFeatherPauseElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-pause', IconFeatherPauseElement)
