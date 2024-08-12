import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPauseCircleElement } from '@aracna/icons-feather-web/elements/pause-circle-element'

export const IconFeatherPauseCircle: ElementComponent<IconFeatherPauseCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPauseCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-pause-circle', IconFeatherPauseCircleElement)
