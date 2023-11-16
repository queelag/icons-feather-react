import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherStopCircleElement } from '@aracna/icons-feather-web/elements/stop-circle-element'

export const IconFeatherStopCircle: ElementComponent<IconFeatherStopCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherStopCircleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-stop-circle', IconFeatherStopCircleElement)
