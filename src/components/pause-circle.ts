import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPauseCircleElement } from '@aracna/icons-feather-web/elements/pause-circle-element'

export const IconFeatherPauseCircle: ElementComponent<IconFeatherPauseCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherPauseCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-pause-circle', IconFeatherPauseCircleElement)
