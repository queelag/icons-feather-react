import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherShareElement } from '@aracna/icons-feather-web/elements/share-element'

export const IconFeatherShare: ElementComponent<IconFeatherShareElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherShareElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-share', IconFeatherShareElement)
