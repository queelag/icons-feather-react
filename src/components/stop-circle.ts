import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherStopCircleElement } from '@aracna/icons-feather-web/elements/stop-circle-element'

export const IconFeatherStopCircle: ElementComponent<IconFeatherStopCircleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherStopCircleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-stop-circle', IconFeatherStopCircleElement)
