import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCompassElement } from '@aracna/icons-feather-web/elements/compass-element'

export const IconFeatherCompass: ElementComponent<IconFeatherCompassElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCompassElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-compass', IconFeatherCompassElement)
