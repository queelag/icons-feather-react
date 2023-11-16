import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCompassElement } from '@aracna/icons-feather-web/elements/compass-element'

export const IconFeatherCompass: ElementComponent<IconFeatherCompassElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCompassElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-compass', IconFeatherCompassElement)
