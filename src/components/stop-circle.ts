import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherStopCircleElement } from '@aracna/icons-feather-web/elements/stop-circle-element.js'

export const IconFeatherStopCircle: ElementComponent<IconFeatherStopCircleElement, IconProps> = createBaseElementComponent<
  IconFeatherStopCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-stop-circle', IconFeatherStopCircleElement)
