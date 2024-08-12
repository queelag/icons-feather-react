import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCompassElement } from '@aracna/icons-feather-web/elements/compass-element'

export const IconFeatherCompass: ElementComponent<IconFeatherCompassElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCompassElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-compass', IconFeatherCompassElement)
