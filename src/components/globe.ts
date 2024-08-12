import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherGlobeElement } from '@aracna/icons-feather-web/elements/globe-element'

export const IconFeatherGlobe: ElementComponent<IconFeatherGlobeElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherGlobeElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-globe', IconFeatherGlobeElement)
