import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPauseCircleElement } from '@aracna/icons-feather-web/elements/pause-circle-element'

export const IconFeatherPauseCircle: ElementComponent<IconFeatherPauseCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPauseCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-pause-circle', IconFeatherPauseCircleElement)
