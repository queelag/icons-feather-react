import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLockElement } from '@aracna/icons-feather-web/elements/lock-element'

export const IconFeatherLock: ElementComponent<IconFeatherLockElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLockElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-lock', IconFeatherLockElement)
