import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherDatabaseElement } from '@aracna/icons-feather-web/elements/database-element'

export const IconFeatherDatabase: ElementComponent<IconFeatherDatabaseElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherDatabaseElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-database', IconFeatherDatabaseElement)
