import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherEdit3Element } from '@aracna/icons-feather-web/elements/edit-3-element'

export const IconFeatherEdit3: ElementComponent<IconFeatherEdit3Element, AracnaIconProps> = createBaseElementComponent<
  IconFeatherEdit3Element,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-edit-3', IconFeatherEdit3Element)
