import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCompassElement } from '@aracna/icons-feather-web/elements/compass-element'

export const IconFeatherCompass: ElementComponent<IconFeatherCompassElement, IconProps> = createBaseElementComponent<
  IconFeatherCompassElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-compass', IconFeatherCompassElement)
